function MenuItem () {
    return <div
            style={{
            display:'flex',
            height:'120px',
            width:'100%',
            border:'2px solid blue'
            }}
        >
        <div style={{
            width:'120px',
            height:'100%',
            border:'2px solid yellow'
        }}></div>

        <div style={{
            flex:1,
            border:'2px solid green',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            color:'#fff'
        }}>
            <p>Album Name</p>
            <p style={{
            fontSize:'10px'
            }}>Album Name author</p>
        </div>

        

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'120px',
        height:'120px',
        border:'2px solid yellow',
        color:'#fff'
      }}>100 follows</div>



    </div>
}


export default ({data}) => {
    return <div style={{
        position: "absolute",
        width:'570px',
        maxHeight:'500px',
        border:'5px solid red',
        overflowY:'auto',
        top:'60px',
        backgroundColor:'black',
        
      }}>
        {data.map(n => <MenuItem />)}
  
      </div>
}