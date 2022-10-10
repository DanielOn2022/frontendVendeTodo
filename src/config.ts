

export interface Config {
  apiUrl: string
}

const config: Config = {
  apiUrl: process.env.REACT_APP_VENDETODO_URL || ''
}

export default config;