import './registration.style.css'
import {
  FormControl,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'
import Radio from '@mui/material/Radio'
import { useRegistration } from './useRegistration'

function Registration() {
  const {
    userDetails,
    onRegistrationHandler,
    onRegistrationFieldHandler,
    roleHandler,
  } = useRegistration()
  return (
    <div className="body">
      <FormControl>
        <h2 style={{ marginTop: '20' }}>Registration Form</h2>
        <TextField
          label="Username"
          id="username"
          variant="outlined"
          onChangeCapture={onRegistrationFieldHandler}
        />
        <div id="password">
          <TextField
            label="password"
            id="password"
            variant="outlined"
            onChangeCapture={onRegistrationFieldHandler}
          />
        </div>
        <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={userDetails.role}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="admin"
              control={<Radio onChange={() => roleHandler('admin')} />}
              label="admin"
            />
            <FormControlLabel
              value="user"
              control={<Radio onChange={() => roleHandler('user')} />}
              label="user"
            />
          </RadioGroup>
        </div>
        <div id="buttonContainer">
          <Button onClick={onRegistrationHandler} variant="contained">
            Login
          </Button>
        </div>
      </FormControl>
    </div>
  )
}

export default Registration
