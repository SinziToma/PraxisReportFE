import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.PureComponent {
    render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Decline praxis</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Leave a message.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="status_message"
                            label="Status message"
                            fullWidth
                            value={this.props.updatePraxisStatus || ''}
                            onChange={this.props.handleDialogChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.props.handleDeclineSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FormDialog;
