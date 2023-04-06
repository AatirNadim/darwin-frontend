import React from 'react'
import html2canvas from "html2canvas";

import jsPDF from "jspdf"


import Header from '../Components/HeaderComp'
import { useNavigate } from 'react-router-dom'
import ChartComp from '../Components/ChartComponent';

const Dashboard = () => {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [dec, setDec] = React.useState(JSON.parse(atob(info.bstr)))

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }
  React.useEffect(() => {
    // const obj = JSON.parse(localStorage.getItem('user'));
    if (!info) {
      navigate('/login');
    }
    console.log(info);
    // setInfo(JSON.parse(atob(obj.bstr)))
    console.log(dec)
    // console.log(JSON.parse(atob(obj.bstr)));
  }, [])

  const handlePrint = (e) => {
    console.log('in the handleprint function');
    const but = e.target;
    // but.style.display = "none";
    const inp = window.document.getElementsByClassName('printDiv')[0];
    html2canvas(inp).then((canvas) => {
      const img = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("landscape");
      pdf.addImage(
        img,
        "JPEG",
        10, 10, 280, 150
      );
      pdf.save("chart.pdf");
      // but.style.display = "block";
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor: 'red',
          height: '80vh'
        }}
      >
        {/* this is for the display of the response body */}
        {/* the respoonse body on the left */}
        {/* line chart on the right */}
        <div
          style={{
            flex: 0.7,
            display: 'flex',
          }}
        >
          <div
            style={{
              flex: 0.5,
              paddingLeft: '1.5rem',
              fontSize: '1.5rem',
              paddingTop: '1.5rem',
            }}
          >
            <div><span
              style={{
                fontWeight: 'bold',
              }}
            >Role :</span> {dec.role}</div>

            <div><span style={{
              fontWeight: 'bold',
            }}>Name :</span> 
            {`${dec.basic_info.first_name} ${dec.basic_info.last_name}`}</div>
            <div><span style={{
              fontWeight: 'bold',
            }}>Mobile No :</span> 
            {dec.basic_info.mobile_no}</div>
            <div><span style={{
              fontWeight: 'bold',
            }}>Whatsapp No :</span> 
            {dec.basic_info.whatsapp_no}</div>
            <div><span style={{
              fontWeight: 'bold',
            }}>Message :</span> 
            {dec.message}</div>
          </div>
          <div
            style={{
              flex: 0.5,
              // backgroundColor : 'GrayText'
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                flex: 0.9,
              }}
              className='printDiv'
            >
              <ChartComp />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.1,
                // height : '100%',
              }}
            >

              <button
                style={{
                  height: '2.5rem',
                  marginTop: '0.5rem',
                  width: '10rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
                onClick={handlePrint}

              >Print to PDF</button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.3,
          }}
        >
          <button
            style={{
              height: '6rem',
              width: '11rem',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              backgroundColor: '#6e64c5',
              color: 'antiquewhite',
              border: 'none',
              borderRadius: '1rem',
              // borderColor : '#7550a9'
            }}
            onClick={handleLogout}
          >Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard