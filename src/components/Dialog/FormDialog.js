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
                    <DialogTitle id="form-dialog-title">De ce?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Lasă o indicație.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="indicatie"
                            label="Indicatii"
                            type="text"
                            fullWidth
                            value={this.props.updatePraxisStatus || ''}
                            onChange={this.props.handleDialogChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Inchide
                        </Button>
                        <Button onClick={this.props.handleDeclineSave} color="primary">
                            Trimite
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FormDialog;
