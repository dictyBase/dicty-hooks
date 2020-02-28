import useNavbar, { formatNavbarData } from "../src/hooks/useNavbar"
import { renderHook, cleanup } from "@testing-library/react-hooks"
import navbarItems from "../src/data/navbar"

let globalAny = global as any

const mockNavbarData = {
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

describe("useNavbar", () => {
  beforeEach(() => {
    globalAny.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(resolve => {
          resolve({
            ok: true,
            status: 200,
            statusText: "OK",
            json: () => mockNavbarData,
          })
        }),
    )
  })
  afterEach(() => cleanup)
  it("renders with expected values when first fetching", () => {
    const {
      result: { current },
    } = renderHook(() => useNavbar())
    expect(current.navbarData).toEqual(navbarItems)
    expect(current.error).toEqual(null)
  })

  it("resolves the promise correctly", async () => {
    let { result, waitForNextUpdate } = renderHook(() => useNavbar())
    await waitForNextUpdate()
    expect(result.current.error).toEqual(null)
    expect(result.current.navbarData).toEqual(formatNavbarData(mockNavbarData))
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
    let { result, waitForNextUpdate } = renderHook(() => useNavbar())
    await waitForNextUpdate()
    expect(result.current.error).toEqual("not found")
    expect(result.current.navbarData).toEqual(navbarItems)
  })

  it("rejects the promise correctly", async () => {
    globalAny.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        error: "this is a test error",
      }),
    )
    let { result, waitForNextUpdate } = renderHook(() => useNavbar())
    await waitForNextUpdate()
    expect(result.current.error).toEqual(
      {
        error: "this is a test error",
      }.toString(),
    )
    expect(result.current.navbarData).toEqual(navbarItems)
  })
})
