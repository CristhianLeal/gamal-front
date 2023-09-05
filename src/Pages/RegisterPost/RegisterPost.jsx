import { useForm } from 'react-hook-form'
import './registerPost.css'

const RegisterPost = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="background-black">
      <div className="form-container p-3">
        <h3 className="text-center text-white">CREAR POST</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input type="text" className={`form-control ${errors.titulo ? 'is-invalid' : ''}`} {...register('titulo', { required: true })} />
            {errors.titulo && <div className="invalid-feedback">Este campo es requerido</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Detalle</label>
            <textarea className={`form-control ${errors.detalle ? 'is-invalid' : ''}`} {...register('detalle', { required: true })} />
            {errors.detalle && <div className="invalid-feedback">Este campo es requerido</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Links para reel</label>
            <input type="text" className="form-control" {...register('linksReel')} />
          </div>

          <div className="mb-3">
            <label className="form-label">Links para videos</label>
            <input type="text" className="form-control" {...register('linksVideos')} />
          </div>

          <div className="mb-3">
            <label className="form-label">Imágenes</label>
            <input type="text" className="form-control" {...register('imagenes')} />
          </div>

          <button type="submit" className="btn btn-primary">Crear Post</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPost
