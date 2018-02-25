import React from 'react';
import {Progress} from 'reactstrap';

const Progr = (props) => {
  return (
    <div>
      <div>
        <div className="text-center">Plain</div>
        <Progress multi>
          <Progress bar value="15"/>
          <Progress bar color="success" value="20"/>
          <Progress bar color="info" value="25"/>
          <Progress bar color="warning" value="20"/>
          <Progress bar color="danger" value="15"/>
        </Progress>
        <div className="text-center">With Labels</div>
        <Progress multi>
          <Progress bar value="15">Meh</Progress>
          <Progress bar color="success" value="35">Wow!</Progress>
          <Progress bar color="warning" value="25">25%</Progress>
          <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
        </Progress>
        <div className="text-center">Stripes and Animations</div>
        <Progress multi>
          <Progress bar striped value="15">Stripes</Progress>
          <Progress bar animated={props.animated || false} color="success" value="30">Animated Stripes</Progress>
          <Progress bar color="info" value="25">Plain</Progress>
        </Progress>
      </div>
      <br/>
      <div>
        <div className="text-center">1 of 5</div>
        <Progress value="1" max="5"/>
        <div className="text-center">50 of 135</div>
        <Progress value={50} max="135"/>
        <div className="text-center">75 of 111</div>
        <Progress value={75} max={111}/>
        <div className="text-center">463 of 500</div>
        <Progress value="463" max={500}/>

        <div className="text-center">Various (40) of 55</div>
        <Progress multi>
          <Progress bar value="5" max={55}>5</Progress>
          <Progress bar color="success" value="15" max={55}>15</Progress>
          <Progress bar color="warning" value="10" max={55}>10</Progress>
          <Progress bar color="danger" value="10" max={55}>10</Progress>
        </Progress>
      </div>
    </div>
  );
};

const Prog = (props) => {
  return (
    <div>
      <div className="text-center">Stripes and Animations</div>
      <Progress multi>
        <Progress bar striped value="15">Stripes</Progress>
        <Progress bar animated={props.animated || false} striped={props.animated || false} color={props.color || 'danger'} value={props.value || 30}
                  max={100}>{props.text || "kod"}</Progress>
        <Progress bar color="info" value="25">Plain</Progress>
      </Progress>

    </div>
  );
};


export {Progr};
export default Prog;
