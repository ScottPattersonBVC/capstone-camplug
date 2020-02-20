import React from 'react';

export default ({data}) => {
  const dataList = data.map((d) => <li>{d}</li>)
  console.log(data);
  return (
    <div>
      <h3>camplug/1</h3>
      <ul>
        {dataList}
      </ul>
    </div>
  )
}
