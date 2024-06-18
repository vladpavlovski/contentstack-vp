'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { HeaderProps } from '../../typescript/layout'
import Link from 'next/link'

export function Menu({ data }: { data: HeaderProps }) {
  const { navigation_menu } = data
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation_menu.map((menuItem) => {
          const hasDropdown = menuItem.navigation_submenu.length
          return hasDropdown ? (
            <NavigationMenuItem key={menuItem._metadata.uid}>
              <NavigationMenuTrigger>{menuItem.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  {menuItem.navigation_submenu.map((subMenu) => {
                    return (
                      <ListItem
                        key={subMenu._metadata.uid}
                        href={subMenu.page_reference[0].url}
                        title={subMenu.label}
                      >
                        {subMenu.page_reference[0].title}
                      </ListItem>
                    )
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <Link
              key={menuItem._metadata.uid}
              href={menuItem.page_reference[0].url}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menuItem.label}
              </NavigationMenuLink>
            </Link>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
