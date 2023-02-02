// third part types

// local part types
import type { BallType } from '../../../types/CartParabola';
// third part imports
import {ref} from 'vue'
// local imports

export const init=()=>{
    // ref 
    const balls = ref<Array<BallType>>([
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false },
      ]);
      const castBalls = ref<Array<BallType>>([]);

      // methods

      const ballBeforeEnter = (el: any) => {
 

        const len = balls.value.length;
        for (let i = 0; i < len; i++) {
          const ball = balls.value[i];
          if (ball.show) {
      
            const rect = ball.el?.getBoundingClientRect();
            // let x = rect!.left - 40;
            const y = rect!.top - window.innerHeight + 40;
            // el.style.webkitTransform = `translate3d(${x}px,0,0)`;
            // el.style.transform = `translate3d(${x}px,0,0)`;
            el.style.webkitTransform = `translate3d(0,0,0)`;
            el.style.transform = `translate3d(0,0,0)`;
            // 直接设置在样式中，因为过渡是用在父元素中，子元素图片实现scale 放大和缩小，而不影响父元素的过渡效果
            // el.style.transition="0.4s all cubic-bezier(0.49, -0.29, 0.75, 0.41)"
      
            const child = el.children[0];
      
            // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中
            child.style.transform = `translate3d(0,${y}px,0) scale(0.75)`;
            child.style.webkitTransform = `translate3d(0,${y}px,0)  scale(0.75)`;
      
      
          }
        }
      };
      const ballEnter = (el: any, done: any) => {
        // isActive.value=true
        el.timer = setTimeout(() => {
      
          const left=document.getElementById('cartCenterId')?.getBoundingClientRect().left as number
          el.style.webkitTransform = `translate3d(${left-10}px,0,0)`;
          el.style.transform = `translate3d(${left-10}px,0,0)`;
        
          const child = el.children[0];
          // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中，
          // 通过transition 实现过渡 
          // child.style.transform = `translate3d(0,0,0) scale(0.15)`;
          // child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;
      
          
          child.style.transform = `translate3d(0,0,0) scale(0.15)`;
          child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;
      
          el.addEventListener("transitionEnd", done);
          el.addEventListener("webkitTransitionEnd", done);
      
       
        }, 30);
       
      };
      const ballAfterEnter = (el: any) => {
        // isActive.value=false
        const ball = castBalls.value.shift();
        if (ball) {
          ball.show = false;
          el.style.display = "none";
          clearTimeout(el.timer);
        //   switch (ball.type) {
        //     case 1:
        //       count1.value += 1;
        //       break;
        //     case 2:
        //       count2.value += 1;
        //       break;
        //     case 3:
        //       count3.value += 1;
        //       break;
        //     case 4:
        //       count4.value += 1;
        //       break;
        //   }
        }
      };

      const genUniqKey = (k: any) => {
        return Symbol(k).toString();
      }
    return {
        balls,
        genUniqKey,
        ballBeforeEnter,
        ballEnter,
        ballAfterEnter
    }
}

