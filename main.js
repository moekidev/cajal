import './main.css'
import 'tippy.js/dist/tippy.css'
import { Application } from 'stimulus'
import { CajalController } from './controllers/cajal_controller'

window.Stimulus = Application.start()
Stimulus.register("cajal", CajalController)
