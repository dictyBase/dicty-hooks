import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { render } from "@testing-library/react"
import useIntersectionObserver from "../src/hooks/useIntersectionObserver"

describe("useIntersectionObserver", () => {
  const window = global as any
  let mockObserve: jest.Mock
  let mockDisconnect: jest.Mock

  describe("observe and unobserve methods", () => {
    beforeEach(() => {
      mockObserve = jest.fn()
      mockDisconnect = jest.fn()
    })
    beforeAll(() => {
      window.IntersectionObserver = jest.fn(() => ({
        observe: mockObserve,
        disconnect: mockDisconnect,
      }))
    })
    afterEach(() => {
      jest.clearAllMocks()
    })

    it("should call unobserve method only on unmount", () => {
      const { unmount } = renderHook(() =>
        useIntersectionObserver({ hasMore: true }),
      )
      expect(mockDisconnect).toHaveBeenCalledTimes(0)
      unmount()
      expect(mockDisconnect).toHaveBeenCalledTimes(1)
    })
  })

  describe("isIntersecting", () => {
    it("should return true if intersecting and more to fetch", () => {
      window.IntersectionObserver = jest.fn(callback => {
        callback([{ isIntersecting: true }])
        return {
          observe: mockObserve,
          disconnect: mockDisconnect,
        }
      })
      const { result } = renderHook(() =>
        useIntersectionObserver({
          hasMore: true,
        }),
      )
      expect(result.current.intersecting).toBeTruthy()
    })

    it("should return false if not intersecting and nothing left to fetch", () => {
      window.IntersectionObserver = jest.fn(callback => {
        callback([{ isIntersecting: false }])
        return {
          observe: mockObserve,
          disconnect: mockDisconnect,
        }
      })
      const { result } = renderHook(() =>
        useIntersectionObserver({ hasMore: false }),
      )
      expect(result.current.intersecting).toBeFalsy()
    })
  })

  describe("target ref", () => {
    const MockComponent = () => {
      const { intersecting, ref } = useIntersectionObserver({
        rootMargin: "1px",
        threshold: 0.25,
        hasMore: true,
      })

      return <div ref={ref}>{intersecting.toString()}</div>
    }

    it("should call observe method when target ref exists", () => {
      window.IntersectionObserver = jest.fn(callback => {
        callback([{ isIntersecting: false }])
        return {
          observe: mockObserve,
          disconnect: mockDisconnect,
        }
      })
      render(<MockComponent />)
      expect(mockObserve).toHaveBeenCalledTimes(1)
    })
  })
})
