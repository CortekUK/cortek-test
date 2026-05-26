"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    console.log("IconCloud: Starting to load icons:", iconSlugs)
    setIsLoading(true)
    const timeout = setTimeout(() => {
      console.warn("IconCloud: Loading timeout - showing fallback")
      setIsLoading(false)
      setData(null)
    }, 5000)

    fetchSimpleIcons({ slugs: iconSlugs })
      .then((result) => {
        clearTimeout(timeout)
        console.log("IconCloud: Successfully loaded icons:", Object.keys(result.simpleIcons).length, result.simpleIcons)
        setData(result)
        setIsLoading(false)
      })
      .catch((error) => {
        clearTimeout(timeout)
        console.error("IconCloud: Failed to fetch icons:", error)
        setData(null)
        setIsLoading(false)
      })
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    )
  }, [data, theme])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[400px]">
        <div className="animate-pulse text-muted-foreground">Loading icons...</div>
      </div>
    )
  }

  if (!data || !renderedIcons || renderedIcons.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[400px]">
        <div className="text-muted-foreground">
          <div className="text-center space-y-2">
            <div className="text-4xl">🔧</div>
            <div>Integration Hub</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}
