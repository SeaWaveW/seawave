<template>
<div style="z-index:800">
    
    <div class="login-card" :class="[isLogin ? 'login-form' : 'register-form']">
        <div class="register">register</div>
        <div class="login">login</div>
        <div class="shade">
            <button @click="isLogin = !isLogin">{{isLogin ? '注册' : '登录'}}</button>
        </div>
    </div>

    <sw-button type="success" @click="browserRedirect">ss</sw-button>

</div>
</template>
    
<script>
import { httpMap,polling,sort,deepClone,hump,intersection} from '../../../js/src';
import confirm from '@components/confirm';

import {Button} from 'seawave-ui'

export default {
    name:"",
    components:{
        SwButton:Button
    },
    data(){return{
        isLogin:true,
    }},
    methods:{
        browserRedirect(){
            const webReg = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/
            const userAgent = navigator.userAgent.toLowerCase()
            let br = webReg.test(userAgent) ? 'm' : 'w'
            return br
        },
        //字符串反转
        strReverse(){
            let str = 'My Love'
            let strArr = str.split('')
            let newStrArr = strArr.reverse()
            let newStr = newStrArr.join('')
            console.log(newStr)
        }
    },

    mounted(){
        
    }
}
    
</script>
<style scoped lang="scss">
$shadeWidth:30%;
$duration:0.6s;
.login-card{
    position: relative;
    width: 600px;
    height: 400px;
    background: white;
    overflow: hidden;
    .register,.login{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .register{
        background: palevioletred;
        padding-left:$shadeWidth ;
    }
    .login{
        background: powderblue;
        padding-right:$shadeWidth ;
    }
    .shade{
        position: absolute;
        top: 0;
        height: 100%;
        width: $shadeWidth;
        background-color: rgb(0, 0, 0,0.1);
    }
    .register,.login{
        @include prefix(transition,left $duration)
    }
    .shade{
        @include prefix(transition,left $duration)
    }

    &.login-form{
        .login{
            left: 0;
        }
        .register{
            left: 100%;
        }
        .shade{
            left: 70%;
        }
    }
    &.register-form{
        .login{
            left: -100%;
        }
        .register{
            left: 0;
        }
        .shade{
            left: 0;
        }
    }
}
</style>