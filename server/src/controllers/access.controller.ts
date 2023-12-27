import { Ok, SuccessResponse } from '~/core/success.response'
import asyncCatch from '~/helpers/cathAsync'
import AccessService from '~/services/access.service'

class AccessController {
  login = asyncCatch(async (req: Request, res: Response) => {
    new SuccessResponse({ message: 'Login success!', data: AccessService.login(req) })
  })
}

export default new AccessController()
