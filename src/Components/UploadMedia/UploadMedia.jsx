import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

function UploadMedia () {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      console.log('mabel')
      const response = await axios.post('http://localhost:8003/media', data)
    } catch (error) {
      console.error('Error al crear metrica', error)
    }

    // try {
    //   console.log('holaes')
    //   console.log(data.file[0])
    //   const formData = new FormData()
    //   formData.append('file', data.file[0])
    //   console.log('FormData:', formData)
    //   const response = await axios.post(
    //     'http://localhost:8003/media',
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     }
    //   )
    //   if (response.status === 201) {
    //     toast.success(response.data.message)
    //   } else {
    //     toast.error(response.data)
    //   }

    //   setLoading(false)
    //   setSuccess(true)
    // } catch (error) {
    //   setLoading(false)
    //   setError(true)
    //   setErrorMessage(error.message)
    // }
  }

  function handleFileInputChange (event) {
    const fileInput = event.target
    const selectedFileName = fileInput.files[0]?.name || 'Seleccione archivo'
    fileInput.setAttribute('data-file-name', selectedFileName)
  }

  return (
    <>
      <div className="d-flex flex-column">
        <form onSubmit={handleSubmit(onSubmit)} className="formSubirArchivo">
          <div className="input-group w-100 mx-auto">
            <input
              type="file"
              id="fileInput"
              name="file"
              className="form-control"
              {...register('file', { required: true })}
              data-file-name="Select File.."
              onChange={handleFileInputChange}
            />
            <button type="submit" className={ success ? 'btn btn-success text-white' : 'btn btn-personalizado text-white'}>
              {loading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {!loading && !success && 'Subir Imagen'}
              {success && (
                <>
                  <span
                    className="me-2">
                    <i className="bi bi-check text-light"></i>
                  </span>
                </>
              )}
            </button>
          </div>
          {errors.image && (
            <span className="text-danger fs-6">Seleccione un archivo.</span>
          )}
          {error && <p className="text-danger">{errorMessage}</p>}
        </form>
      </div>
    </>
  )
}

export default UploadMedia
