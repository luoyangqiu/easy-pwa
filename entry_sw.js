
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(res => {
      // console.log('service worker is registered', res)
      let sw = null, state;
      if (res.installing) {
        sw = res.installing
        state = 'installing'
      } else if (res.waiting) {
        // 更新完成等待运行
        sw = res.waiting
        state = 'waiting'
      } else if (res.active) {
        // 更新完成激活状态
        sw = res.active
        state = 'activated'
      } else if (res.redundant) {
        // 新的缓存生效后之前的缓存会进入此状态
        sw.res.redundant
        state = 'redundant'
      }
      if (state) {
        console.log('【---SW---】 state is ' + state)
        if (state === 'waiting') {
          // 刷新后判断是否为等待状态
          // self.skipWaiting()
        }
      }
  
      if (sw) {
        sw.onStateChange = () => {
          console.log('sw state is ' + sw.state)
        }
      }
    }).catch(err => {
      console.error('something error is happened', err)
    })

  }
  