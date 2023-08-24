import { Alert, AlertTitle } from '@mui/material'

function NotFoundPage() {
  return (
    <div className="body">
      <Alert severity="info">
        <AlertTitle>opps</AlertTitle>
        404 - <strong>This page does not exist!</strong>
      </Alert>
    </div>
  )
}

export default NotFoundPage
