## Grid-stride loop

$$
\text{Kernel} + \text{Host to Device} + \text{Device to Host}
$$

101.38ms + 29.38513ms + 51.32815ms

## Grid-stride loop + pre-fetching

$$
\text{Kernel} + \text{Host to Device}
$$

35.988ms + 16.55234ms

## Grid-stride loop + pre-fetching + page creation

$$
\text{Kernel} + \text{Host to Device}
$$

3.4880us + 7.327us

## Grid-stride loop + pre-fetching + page creation + mem advise

$$
\text{Kernel} + \text{Host to Device}
$$

3.8400us + 7.776us