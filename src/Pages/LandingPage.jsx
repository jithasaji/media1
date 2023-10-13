import React from 'react'
import { Col, Row,Card, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()

  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between'>
    <Col></Col>
    <Col lg={4}>
      <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae arcu neque. Aenean aliquam arcu in fermentum volutpat. Proin tempor egestas iaculis. Vivamus rhoncus, est a ornare vulputate, sapien ipsum aliquet dui, ut fringilla orci arcu sit amet lorem. Nullam imperdiet aliquam ligula, quis cursus sem. Vestibulum eu venenatis felis.</p>
      <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Get Started</button>
    </Col>
    <Col></Col>
    <Col className='ps-5' lg={6}>
      <img className='img-fluid ms-5 ps-5' src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248" alt="landing" />
    </Col>
    </Row>
   <div className='container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center '>
    <h3>Features</h3>
    <div className='cards w-100 mt-5 d-flex align-items-center justify-content-between' >
        <Card className='p-3' style={{ width: '22rem' }}>
          <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='p-3' style={{ width: '22rem' }}>
          <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.tenor.com/SZ0mKr1WKMsAAAAd/music-wave.gif" />
          <Card.Body>
            <Card.Title>Managing Audio</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='p-3' style={{ width: '22rem' }}>
          <Card.Img height={'300px'} width={'300px'} variant="top" src="https://gifdb.com/images/high/simple-audio-sound-wave-awolo4ekfaknri0n.gif" />
          <Card.Body>
            <Card.Title>Managing Music </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
   </div>
   <div className='container w-100 border p-5 border-secondary rounded mt-5 mb-5 d-flex align-items-center justify-content-between '>
    <div className='content'>
    <h3 className='text-warning mb-5'>Simple,Fast and Powerful</h3>
    <h6><span className='fs-5 fw-bolder'>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae arcu neque. </h6>
    <h6 className='mt-4'><span className='fs-5 fw-bolder'>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae arcu neque. </h6>
    <h6 className='mt-4'><span className='fs-5 fw-bolder'>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae arcu neque. </h6>

    </div>
    <div className='video ms-5'>
   <iframe width="640" height="360" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
   </div>
   </div>
  
    </>
  )
}

export default LandingPage
