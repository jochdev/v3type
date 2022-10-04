import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>
}

/**
 * @name: getLocalesData
 * @description: "Helper" que cargara los archivos JSON de localizacion
 */


const getLocalesData = (): LocalesDataInterface => {
  // usa require.context para obtener todos los archivos .json
  const files = (require as any).context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)

  // crea la instancia que contendra los datos cargados.

  const localeData: LocalesDataInterface = {
    messages: {}
  }


  // Itera sobre todos los archivos

  const keys: string[] = files.keys()
  keys.forEach((key: string) => {
    // extrae el nombre sin extension

    const matched = key.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const localeId = matched[1]
      // por cada archivom guardar los mensajes en la propiedad de mensajes correspondientes
      localeData.messages[localeId] = files(key).messages
    }

  })

  return localeData
}


const data: LocalesDataInterface = getLocalesData()

export const i18n = createI18n({
  locale: 'es-ES',
  fallbackLocale: 'en-US',
  messages: data.messages
})
