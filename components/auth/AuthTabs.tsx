import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthTabs = () => {
  return (
    <Tabs defaultValue='Login' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='Login'>Login</TabsTrigger>
        <TabsTrigger value='register'>register</TabsTrigger>
      </TabsList>
      <TabsContent value='Login'>
        <LoginForm />
      </TabsContent>
      <TabsContent value='register'>
        <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}

export default AuthTabs
