import { Router } from 'express'
import AccessRoute from './access.route'

const router: Router = Router()

router.use('/access', AccessRoute)

export default router
