import useFooter, { formatFooterData } from "../src/hooks/useFooter"
import { renderHook, cleanup } from "@testing-library/react-hooks"
import footerItems from "../src/data/footer"

let globalAny = global as any

const mockFooterData = {
  data: [
    {
      type: "genomes",
      id: "1",
      attributes: {
        display: "Genomes",
        items: [
          {
            label: "Dictyostelium discoideum",
            link: "/",
          },
          {
            label: "Dictyostelium purpureum",
            link: "http://genomes.dictybase.org/purpureum",
          },
          {
            label: "Dictyostelium fasciculatum",
            link: "http://genomes.dictybase.org/fasciculatum",
          },
          {
            label: "Polysphondylium pallium",
            link: "http://genomes.dictybase.org/pallidum",
          },
        ],
      },
    },
  ],
}

describe("useFooter", () => {
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
  it("renders with expected values when first fetching", () => {
    const {
      result: { current },
    } = renderHook(() => useFooter())
    expect(current.footerData).toEqual(footerItems)
    expect(current.error).toEqual(null)
  })

  it("resolves the promise correctly", async () => {
    let { result, waitForNextUpdate } = renderHook(() => useFooter())
    await waitForNextUpdate()
    expect(result.current.error).toEqual(null)
    expect(result.current.footerData).toEqual(formatFooterData(mockFooterData))
  })

  it("sets error if res not ok", async () => {
    globalAny.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(resolve => {
          resolve({
            ok: false,
            status: 404,
            statusText: "not found",
            json: () => {},
          })
        }),
    )
    let { result, waitForNextUpdate } = renderHook(() => useFooter())
    await waitForNextUpdate()
    expect(result.current.error).toEqual("not found")
    expect(result.current.footerData).toEqual(footerItems)
  })

  it("rejects the promise correctly", async () => {
    globalAny.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        error: "this is a test error",
      }),
    )
    let { result, waitForNextUpdate } = renderHook(() => useFooter())
    await waitForNextUpdate()
    expect(result.current.error).toEqual(
      {
        error: "this is a test error",
      }.toString(),
    )
    expect(result.current.footerData).toEqual(footerItems)
  })
})
