import { Router } from 'express'
import AccessController from '~/controllers/access.controller'

const router: Router = Router()

router.post('login', AccessController.login)

export default router
