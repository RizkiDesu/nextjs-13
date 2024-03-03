export default function PostDetail({ params }: {params: {post_id: string}}) {

  console.log(params)


    return (
      <div>
        <h1>post {params.post_id[0]}</h1>
      </div>
    )
  }