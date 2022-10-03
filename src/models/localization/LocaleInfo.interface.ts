export interface LocaleInfoInterface {
  name: string // El nombre legible de la localización, p.ej. USA
  locale: string // El código, p.ej. en-US
  flag: string // El código de 2 caracteres usado para formar el nombre del icono
  selected: boolean // Si la localización está seleccionada actualmente
}