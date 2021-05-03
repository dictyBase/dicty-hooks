import useFetch from "../src/hooks/useFetch"
import { renderHook, cleanup, act } from "@testing-library/react-hooks"

let globalAny = global as any

const mockInitialData = {
  data: [
    {
      type: "link",
      id: "1",
      attributes: {
        url: "/research/techniques",
        description: "Techniques",
      },
    },
    {
      type: "link",
      id: "2",
      attributes: {
        url: "/research/teach",
        description: "Teaching Protocols",
      },
    },
    {
      type: "link",
      id: "3",
      attributes: {
        url: "/stockcenter",
        description: "Dicty Stock Center",
      },
    },
  ],
}

const mockFooterData = {
  data: [
    {
      type: "link",
      id: "1",
      attributes: {
        url: "/research/techniques",
        description: "Techniques",
      },
    },
    {
      type: "link",
      id: "2",
      attributes: {
        url: "/research/teach",
        description: "Teaching Protocols",
      },
    },
    {
      type: "link",
      id: "3",
      attributes: {
        url: "/stockcenter",
        description: "Dicty Stock Center",
      },
    },
    {
      type: "link",
      id: "4",
      attributes: {
        url:
          "http://dictybase.org/tools/jbrowse/?data=data%2Fjbrowse%2Fdiscoideum&loc=6%3A1..50022&tracks=reference%2Cgene%2Ctranscript&highlight=",
        description: "Genome Browser",
      },
    },
    {
      type: "link",
      id: "5",
      attributes: {
        url: "/dictyaccess",
        description: "DictyAccess",
      },
    },
    {
      type: "link",
      id: "6",
      attributes: {
        url: "/community/conference",
        description: "Conference",
      },
    },
    {
      type: "link",
      id: "7",
      attributes: {
        url: "/community/labs",
        description: "Labs",
      },
    },
    {
      type: "link",
      id: "8",
      attributes: {
        url: "/about",
        description: "About",
      },
    },
    {
      type: "link",
      id: "9",
      attributes: {
        url: "/stockcenter/contact",
        description: "Contact",
      },
    },
  ],
}

const mockURL = "https://testapi.dictybase.dev"

describe("useFetch", () => {
  beforeEach(() => {
    globalAny.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(resolve => {
          resolve({
            ok: true,
            status: 200,
            statusText: "OK",
            json: () => mockFooterData,
          })
        }),
    )
  })
  afterEach(() => cleanup)

  it("resolves the promise correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(mockURL, mockInitialData),
    )
    await act(() => waitForNextUpdate())
    expect(result.current.error).toEqual(false)
    expect(result.current.data).toEqual(mockFooterData)
  })

  it("rejects the promise correctly", async () => {
    globalAny.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        error: "this is a test error",
      }),
    )
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(mockURL, mockInitialData),
    )
    await act(() => waitForNextUpdate())
    expect(result.current.error).toEqual(true)
    expect(result.current.data).toEqual(mockInitialData)
  })
})
