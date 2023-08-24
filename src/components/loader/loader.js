import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { useSelector } from 'react-redux'

export default function LoaderComponent() {
  const loader = (state) => state.loader
  const loadingState = useSelector(loader)

  return (
    <>
      {loadingState.isLoading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : null}
    </>
  )
}
