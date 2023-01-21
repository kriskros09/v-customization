/* eslint-disable react/display-name */
/* eslint-disable unicorn/no-array-reduce */

export default function CombineContexts(...contexts) {
  return contexts.reduce(
    (AccumulatedContexts, CurrentContext) => {
      return ({ children }) => {
        return (
          <AccumulatedContexts>
            <CurrentContext>{children}</CurrentContext>
          </AccumulatedContexts>
        )
      }
    },
    ({ children }) => <>{children}</>
  )
}
