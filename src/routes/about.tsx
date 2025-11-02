import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="text-center">
      <h1>About Page</h1>
      <p>This is the About page of the app.</p>
    </div>
  )
}

