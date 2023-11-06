import Image from 'next/image'
import _ from 'lodash';
import moment from"moment"

export default function Home() {
const data = [{
  campaign: "Charles",
  company_ID: "1",
  coreURL: "http://www.test77.com",
  createdAt: "2017-11-06T20:45:56.931Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-09-06T20:45:56.931Z",
  _id: "6gsb42PSSJt7PgsDG"
}, {
  campaign: "Charles",
  company_ID: "1",
  coreURL: "http://www.test66,com",
  createdAt: "2017-11-06T20:46:27.744Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-10-06T20:46:27.744Z",
  _id: "Md4wCnEsrQrWApnLS"
}, {
  campaign: "Gary",
  company_ID: "1",
  coreURL: "http://www.test55,com",
  createdAt: "2017-11-06T20:46:27.744Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-07-06T20:46:27.744Z",
  _id: "5p44uiwRgqp35YXRf"
}, {
  campaign: "Fred",
  company_ID: "1",
  coreURL: "http://www.test55,com",
  createdAt: "2017-11-06T20:46:27.744Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-11-15T03:46:27.744Z",
  _id: "5p44uiwRgqp35YXRf"
}, {
  campaign: "Fred",
  company_ID: "1",
  coreURL: "http://www.test55,com",
  createdAt: "2017-11-06T20:46:27.744Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-11-03T20:46:27.744Z",
  _id: "5p44uiwRgqp35YXRf"
}, {
  campaign: "Fred",
  company_ID: "1",
  coreURL: "http://www.test55,com",
  createdAt: "2017-11-06T20:46:27.744Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-11-13T20:46:27.744Z",
  _id: "5p44uiwRgqp35YXRf"
}, {
  campaign: "Fred",
  company_ID: "1",
  coreURL: "http://www.test55,com",
  createdAt: "2017-11-06T20:46:27.744Z",
  owner: "K7xTxu7PRDCuhFZRC",
  updatedAt: "2017-11-09T20:46:27.744Z",
  _id: "5p44uiwRgqp35YXRf"
}];

const groupProp = _.property('updatedAt');

let determineGroup = value => {
  // remove '2017-11-15' to actually use current date 
  const now = moment('2017-11-15T10:00:03Z').startOf('day');

  if (value.isSame(now, 'day')) {
    return 'today';
  }
  if (value.isAfter(now.clone().subtract(7, 'days').startOf('day'))) {
    return 'this week';
  }
  if (value.isSame(now, 'month')) {
    return 'this month';
  }
  return value.format('MM');
};

let groupedData = _
  .chain(data)
  .groupBy(datum => determineGroup(moment(groupProp(datum))))
  .value();
   
   function renderObject(){
        return Object.entries(groupedData).map(([key, value], i) => {
            return (
                <div key={key}>
                   {key}
                  {value.map((val)=>{
                   return (<> {val.campaign}</>)
                  })}
                   
                   
                </div>
            )
        })
    }


console.log(groupedData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

 <div class="flex flex-col-reverse divide-y divide-y-reverse">
  {renderObject()}
 <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
    </main>
  )
}
