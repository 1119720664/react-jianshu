import styled from "styled-components"

export const TopicWrapper = styled.div`
      padding:20px 0 10px 0;
      margin-left:-20px;
      overflow:hidden
`
export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden
    img{
      width:125px;
      height:100px;
      float: right
      border-radius:
    }
`

export const ListInfo = styled.div`
   width:500px;
   float:left;
   .title{
     font-size:18px
     line-height:27px;
     font-weight:bold;
     color:#333
   }
   .desc{
     line-height:24px;
     font-size:13px;
     color:#999
   }
`
export const LoadMore = styled.div`
   width:100%;
   height:40px;
   line-height:40px;
   background:#a5a5a5;
   text-align:center;
   color:#fff;
   margin: 30px 0;
   border-radius:20px;
`
