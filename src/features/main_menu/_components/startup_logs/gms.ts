import { encryption } from '@/io/Generators'

const plog = typer => {
  typer
    .type('<br>')
    .type('COMPANION/CONCIERGE UNIT INITIALIZING')
    .break()
    .type('GMS COMP/CON Unit Mk XI Rev 11.4.1c')
    .break()
    .type('5016.8.22 General Massive Systems // Please Operate Responsibly')
    .break()
    .type('Initializing semantic manifold ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('done')
    .break()
    .type('Initializing logic gradients ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('done')
    .break()
    .type('&emsp;&emsp;1.0255EB FREE (3.6EB TOTAL)')
    .break()
    .type('KERNEL supported CPUs:')
    .break()
    .type('&emsp;&emsp;GMS MISSISSIPPI Series (MkII+)')
    .break()
    .type('&emsp;&emsp;IPS-N Carronade v9.1+')
    .break()
    .type('&emsp;&emsp;SSC Premier IV-XIV')
    .break()
    .type('&emsp;&emsp;HA DOMINANCE line/all')
    .break()
    .type(
      '&emsp;&emsp;[WN UNKNOWN UNKNOWN UNKNOWN <span class="horus--subtle">UN</span>KNOWN UNKNOWN UNKN]'
    )
    .break()
    .type(`Policy Zone: ${encryption()}`)
    .break()
    .type('Demand map ICRS at 3c0001000-23c0001000.')
    .break()
    .type('Heap//PSIM at 23c0002000-43c0002000.')
    .break()
    .type('Thread "Idle": pointer: 0x23c0002010, stack: 0x6440000')
    .break()
    .type('Thread "Main": pointer: 0x23c0002f70, stack: 0x6460000')
    .break()
    .type(`****** VDOMAIN for frame//integrator ******`)
    .break()
    .type('backend at /local/domain/0/backend/gms/')
    .break()
    .type('Failed to read /local/domain/0/ssc/fs_sync.')
    .break()
    .type('Failed to read /local/domain/0/gms/dummy_plug.')
    .break()
    .type('Failed to read /local/domain/0/gms/manual_controls.')
    .break()
    .type('WARNING: FRAME NOT PRESENT OR INVALID')
    .break()
    .type('******************************************')
    .break()
    .type('Initializing gms-cc-subsys v_int')
    .break()
    .type('Initializing gms-cc-subsys tests')
    .break()
    .type('Initializing gms-cc-subsys omninet_cls')
    .break()
    .type('Initializing gms-cc-subsys events')
    .break()
    .type('Hierarchical RCU implementation.')
    .break()
    .type('RCU subjective-clock acceleration is DISABLED.')
    .break()
    .type(`Establishing encrypted link (${encryption()}) `)
    .pause(200)
    .type('. ')
    .pause(200)
    .type('. ')
    .pause(200)
    .type('. ')
    .pause(300)
    .type('done')
    .break()
    .type('AM-LI in unprivileged domain disabled')
    .break()
    .type('No sensory bridge found // manual input mode enabled')
    .break()
    .type(
      '>//[<span class="accent--text">COMP/CON</span>: <span class="stark-text--text">Welcome, Lancer. Input Command.</span>]'
    )
    .go()
}

export default plog
