import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh] w-[300px]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-[1140px]'>{children}</div>
      </div>
      <div className='h-[100vh] flex items-center justify-center relative'>
        {children}
      </div>
    </>
  )
}

export default MainLayout
