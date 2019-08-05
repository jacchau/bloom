import * as React from "react"

const SidebarLayout = {
  Content: (props: any) => (
    <div className="main-content w-3/4">
      {props.children}
    </div>
  ),
  Sidebar: (props: any) => (
    <div className="main-sidebar w-1/4">
      {props.children}
    </div>
  )
}

export default SidebarLayout
