import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";




export default Page(connect(state=>state)(LoginPage))