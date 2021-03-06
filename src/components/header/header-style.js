import styled from "styled-components"
import logoPic from "./logo.png"

export const HeaderWrapper = styled.div`
   height: 58px;
   border-bottom: 1px solid #f0f0f0;
   position: relative;
   z-index:20
`

export const Logo = styled.a.attrs({
    href: '/'
})`
   position:absolute;
   top:0;
   left:0;
   width:100px;
   height:56px;
   background:url(${logoPic});
   background-size:contain
`

export const Nav = styled.div`
   width: 960px;
   height: 100%
   margin: 0 auto
`

export const NavItem = styled.div`
   line-height: 56px;
   padding: 0 15px;
   font-size: 17px;
   color:#333;
   
   &.left {
     float: left
   }
   &.right {
     float: right;
     color: #969696
   }
   &.active {
     color: #ea6f5a
   }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
	height: 38px;
	padding: 0 35px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #777;
	&::placeholder {
		color: #999;
	}
	&.focused {
	  width:240px
	}
	&.slide-enter, &.slide-exit{
     transition:0.5s
   }
    &.slide-enter-active{
     width:240px
   }
    &.slide-exit-active{
     width:160px
   }
`;

export const SearchInfo = styled.div`
   position: absolute;
   left: 0;
   top: 56px;
   width:240px;
   padding:0 20px;
   box-shadow:0 0 8px rgba(0,0,0,0.2);
   background:#fff
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height: 20px;
    font-size:14px;
    color:#969696
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px
    .spin{
      font-size:12px;
      margin-right:2px;
      transition:0.2s ease-in;
      transform:rotate(0deg);
      float:left;
      transform-origin:center center
    }
`

export const SearchInfoList = styled.div`
    overflow:hidden
`

export const SearchInfoItem = styled.a`
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#333;
    border-radius:2px;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    margin-top:10px
`

export const Addition = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   height: 56px
`

export const Button = styled.button`
   float:right;
   line-height:38px;
   border-radius:19px;
   margin-top:9px;
   margin-right:20px;
   padding:0 20px;
   background: #fff;
   border:1px solid #ec6149;
   font-size:14px
   &.reg {
     color:#ec6149
   }
    &.writting {
     color:#fff;
     background:#ec6149
   }
`

export const SearchWrapper = styled.div`
   float:left;
   position: relative;
   .zoom {
     position:absolute;
     right:5px;
     bottom:5px;
     width: 30px;
     height:30px;
     text-align:center;
     line-height:30px
     border-radius:15px;
     &.focused {
       background: #777;
       color: #fff
     }
   }
`;
