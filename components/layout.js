

const Layout = (props) => (
  <div>
  {props.children}
  <style jsx global>{`

    @import url('https://fonts.googleapis.com/css?family=Rubik');

    @fontface {
      font-family: 'Rubik', cursive;
      src: url('https://fonts.googleapis.com/css?family=Rubik')
    }

    @import url('https://fonts.googleapis.com/css?family=Graduate');

    @fontface {
      font-family: 'Graduate', cursive;
      src: url('https://fonts.googleapis.com/css?family=Graduate')
    }
  `}
  </style>
  </div>
)

export default Layout