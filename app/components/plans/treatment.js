//React/Redux
import React from 'react';
import {connect} from 'react-redux';
//material-ui
import {TableHeader,TableRowColumn,TableRow,Table, TableBody, FloatingActionButton} from 'material-ui';
import { StepsTextField, StepsSelectField, StepsMenuItem } from '../material-style';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default (props) => {

  const { exercise, treatment, treatmentErrors, addTreatment, resistanceOnChange, treatmentHandler } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        <Table>
          <TableBody selectable={false} displayRowCheckbox={false}>
            <TableRow selectable={false}>
              <TableRowColumn>
                <img src={exercise.img_url} className="img-responsive"/>
              </TableRowColumn>
              <TableRowColumn>
                <StepsTextField
                  disabled={true}
                  value={exercise.title}
                  floatingLabelText="Exercise" /><br/>
                <StepsTextField disabled={true}
                  value={exercise.description}
                  floatingLabelText='Description'
                  multiLine={true}
                  rows={2}
                  rowsMax={4}/><br/>
                <StepsTextField
                  floatingLabelFixed={true}
                  floatingLabelText="Notes for Patient"
                  errorText={treatmentErrors.notes}
                  value={treatment.notes}
                  onChange={(env) => treatmentHandler('notes', env.target.value)}/>
                 <br/>
              </TableRowColumn>
              <TableRowColumn>
                <StepsTextField
                  floatingLabelFixed={true}
                  floatingLabelText="Sets"
                  errorText={treatmentErrors.sets}
                  type="number"
                  value={treatment.sets}
                  fullWidth={true}
                  onChange={(env) => treatmentHandler('sets', env.target.value)}/>
                <br/>
                <StepsTextField
                  floatingLabelFixed={true}
                  floatingLabelText="Reps" type="number"
                  errorText={treatmentErrors.reps}
                  value={treatment.reps}
                  fullWidth={true}
                  onChange={(env) => treatmentHandler('reps', env.target.value)}/><br/>
                <StepsSelectField
                  floatingLabelFixed={true}
                  floatingLabelText="Resistance"
                  errorText={treatmentErrors.resistance}
                  value={treatment.resistance}
                  fullWidth={true}
                  onChange={resistanceOnChange}
                >
                  <StepsMenuItem value='weighted' primaryText='Weighted'/>
                  <StepsMenuItem value='none' primaryText='None' />
                </StepsSelectField><br/>
                <StepsTextField
                  floatingLabelFixed={true}
                  floatingLabelText="Minutes"
                  errorText={treatmentErrors.time_per_exercise}
                  type="number"
                  value={treatment.time_per_exercise}
                  fullWidth={true}
                  onChange={(env) => treatmentHandler('time_per_exercise', env.target.value)}/>
                <br/>
              </TableRowColumn>
              <TableRowColumn>
                <FloatingActionButton onClick={() => addTreatment()}>
                  <ContentAdd />
                </FloatingActionButton>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
