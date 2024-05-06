export default function getEnvValue(key: string) {
  return import.meta.env[key]
}
