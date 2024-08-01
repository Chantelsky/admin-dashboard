'use client'

import { useParams } from 'next/navigation'
import BackButton from '@/components/BackButton'
import EditPostForm from '@/components/EditPostForm'

const PostEditPage = () => {
  const params = useParams()
  const { id } = params

  if (!id) {
    return <div>Loading... </div>
  }

  return (
    <>
      <BackButton text='Back to Posts' link='/posts' />
      <EditPostForm params={{ id: id as string }} />
    </>
  )
}

export default PostEditPage
