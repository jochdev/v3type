import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'
describe('Item.component.vue', () => {
  it('renders an Item correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }
    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })


    // Esto simplemento prueba que en alguna parte del texto
    // renderizado por el componente aparece 'Unit test item 1'
    // pero no es muy preciso.
    expect(wrapper.text()).to.include('Unit test item 1')

    // Esto es más preciso, ya que estamos seleccionando el div con
    // el nombre de la clase y comprobamos si muestra el texto correcto.
    let domEl = wrapper.find('div.name')
    expect(domEl.text()).to.equal('Unit test item 1')



  })

  it('has expected css class when selected is false', () => {
    const model: ItemInterface = {
      id: 2,
      name: 'Unit test item 2',
      selected: false
    }
    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })
    // comprobar la lista de clases css del componente
    const classes = wrapper.classes()
    expect(classes).to.be.an('array')
      .that.includes('item')
    expect(classes).to.be.an('array')
      .that.does.not.includes('selected')
  })


  it('has selected css class when selected is true', () => {
    const model: ItemInterface = {
      id: 3,
      name: 'Unit test item 3',
      selected: true /* cambiando a selected = true aquí */
    }
    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })
    // comprobar la lista de clases css del componente
    const classes = wrapper.classes()
    expect(classes).to.be.an('array')
      .that.includes('item')
    expect(classes).to.be.an('array')
      .that.includes('selected')
  })



})