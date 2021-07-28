console.log(navigator)
const getWebInfo = () => {
    // 名称
    let name = ''
    //版本
    let version = ''
    // 终端
    let mobile = false
    if(navigator.userAgentData){
        mobile = navigator.userAgentData.mobile
    }else{
        const webReg = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/
        const userAgent = navigator.userAgent.toLowerCase()
        mobile = webReg.test(userAgent)
    }
    

    return {
        //名称
        name,
        //版本
        version,
        // 终端
        computer: !mobile,
        mobile,
        //屏幕宽高
        width:screen.width, 
        height: screen.height,
        //语言
        language: navigator.language,
        languages: navigator.languages,
        //状态
        onLine: navigator.onLine
    }
}

export default getWebInfo