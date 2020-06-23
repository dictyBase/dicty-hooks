import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import {
  render,
  fireEvent,
  queryByTestId,
  getAllByRole,
} from "@testing-library/react"
import useVirtualList from "../src/hooks/useVirtualList"

describe("useVirtualList", () => {
  let ref = null as any

  beforeAll(() => {
    ref = { current: null }
  })

  describe("items returned", () => {
    const { result } = renderHook(() =>
      useVirtualList({
        ref,
        rowHeight: 30,
        numItems: 100,
        viewportHeight: 300,
      }),
    )
    const items = result.current.items
    it("should return correct amount of items", () => {
      expect(items.length).toBe(11) // (300 / 30) + 1
    })
    it("should have correctly calculated transform values", () => {
      expect(items[0].style.transform).toBe("translateY(0px)")
      expect(items[10].style.transform).toBe("translateY(300px)")
    })
  })

  describe("items returned with overscan", () => {
    const { result } = renderHook(() =>
      useVirtualList({
        ref,
        rowHeight: 30,
        numItems: 100,
        viewportHeight: 300,
        overscan: 2,
      }),
    )
    const items = result.current.items
    it("should return correct amount of items", () => {
      // same as previous test but with two rows below
      expect(items.length).toBe(13)
    })
    it("should have correctly calculated transform values", () => {
      expect(items[0].style.transform).toBe("translateY(0px)")
      expect(items[10].style.transform).toBe("translateY(300px)")
      expect(items[12].style.transform).toBe("translateY(360px)")
    })
  })

  describe("scroll handling", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const VirtualList = () => {
      const parentRef = React.useRef<HTMLDivElement>(null)
      const rowData = useVirtualList({
        ref: parentRef,
        rowHeight: 35,
        numItems: data.length,
        viewportHeight: 310,
        overscan: 2,
      })
      const innerHeight = data.length * 35

      return (
        <div data-testid="parent-ref" ref={parentRef}>
          <ul style={{ position: "relative", height: `${innerHeight}px` }}>
            {rowData.items.map((item: any) => {
              const row = data[item.index]
              return (
                <li
                  key={item.index}
                  data-testid={`row-${item.index}`}
                  style={item.style}>
                  {row}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    const { getByTestId } = render(<VirtualList />)
    const outer = getByTestId("parent-ref")
    jest.spyOn(outer, "scrollTop", "get").mockImplementation(() => 300)
    fireEvent.scroll(outer)

    /**
     * Scrolling down 300px in this case would make the following:
     * startIndex = 6 because (300 / 35) - 2
     * endIndex = 14 because 15 - 1 where 15 is numItems
     */

    it("should no longer display first row", () => {
      expect(queryByTestId(outer, "row-1")).toBeFalsy()
    })
    it("should not display row with index 5", () => {
      expect(queryByTestId(outer, "row-5")).toBeFalsy()
    })
    it("should start with row with index 6", () => {
      expect(queryByTestId(outer, "row-6")).toBeTruthy()
    })
    it("should show nine list items", () => {
      expect(getAllByRole(outer, "listitem").length).toBe(9)
    })
    it("should not display more rows than the length of data set", () => {
      expect(queryByTestId(outer, "row-15")).toBeFalsy()
    })
  })
})
