import { renderHook } from "@testing-library/react-hooks"
import useIntersectionObserver from "../src/hooks/useIntersectionObserver"

describe("useIntersectionObserver", () => {
  let ref = null as any
  const window = global as any
  let mockObserve: jest.Mock
  let mockUnobserve: jest.Mock

  beforeAll(() => {
    ref = { current: null }
  })

  describe("observe and unobserve methods", () => {
    beforeEach(() => {
      mockObserve = jest.fn()
      mockUnobserve = jest.fn()
    })
    beforeAll(() => {
      window.IntersectionObserver = jest.fn(() => ({
        observe: mockObserve,
        unobserve: mockUnobserve,
      }))
    })
    afterEach(() => {
      jest.clearAllMocks()
    })
    it("should call observe when ref is passed", () => {
      renderHook(() =>
        useIntersectionObserver({
          ref,
          hasMore: true,
          rootMargin: "1px",
          threshold: 1,
        }),
      )
      expect(mockObserve).toHaveBeenCalledTimes(1)
      expect(mockUnobserve).toHaveBeenCalledTimes(0)
    })

    it("should call unobserve method only on unmount", () => {
      const { unmount } = renderHook(() =>
        useIntersectionObserver({ ref, hasMore: true }),
      )
      expect(mockUnobserve).toHaveBeenCalledTimes(0)
      unmount()
      expect(mockUnobserve).toHaveBeenCalledTimes(1)
    })
  })

  describe("isIntersecting", () => {
    it("should return true if intersecting and more to fetch", () => {
      window.IntersectionObserver = jest.fn(callback => {
        callback([{ isIntersecting: true }])
        return {
          observe: mockObserve,
          unobserve: mockUnobserve,
        }
      })
      const { result } = renderHook(() =>
        useIntersectionObserver({
          ref,
          hasMore: true,
        }),
      )
      expect(result.current).toBeTruthy()
    })

    it("should return false if not intersecting and nothing left to fetch", () => {
      window.IntersectionObserver = jest.fn(callback => {
        callback([{ isIntersecting: false }])
        return {
          observe: mockObserve,
          unobserve: mockUnobserve,
        }
      })
      const { result } = renderHook(() =>
        useIntersectionObserver({ ref, hasMore: false }),
      )
      expect(result.current).toBeFalsy()
    })
  })
})
