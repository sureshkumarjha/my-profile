import React ,{ useState,useEffect  } from 'react';


function SlidingText() {
  var arr = [ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!","Coder.." ]
  const [val, setVal] = useState('');
  var i = 0
  var c = 0
  var flag = true
  var delta = 400
  useEffect(() => {
    const interval = setInterval(() => {
    if(c < arr[i].length && flag){
        c = c+1
      }else{
        c = c-1
        flag = false
        if(c === 0){
          i = i+1
          if(i > arr.length-1){
            i = 0
          }
          flag = true
          c=0
      }
    }
      setVal(arr[i].substring(0,c))
    }, delta);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div>
    <span className='f3 pa2 grey'>I'm a </span>
      <b><span className='f2 b underline' style={{color: "#3e64ff"}}>{val}</span></b>
         <span className='f2 black'>|</span>
    </div>
  );
}

export default SlidingText;