import React from 'react'

export type MainLayoutProps = {
  className?: string
}
const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={`MainLayout ${className}`}>
      {children}
    </div>
  )
}
export default MainLayout