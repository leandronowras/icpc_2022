from manim import *

class CreateCircle(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
        self.play(Create(circle))  # show the circle on screen

#All animations must reside within the construct() method of a class derived from Scene.
#Other code, such as auxiliary or mathematical functions, may reside outside the class.

class SquareToCircle(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        circle.set_fill(PINK, opacity=0.5)  # set color and transparency

        square = Square()  # create a square
        square.rotate(PI / 4)  # rotate a certain amount

        self.play(Create(square))  # animate the creation of the square
        self.play(Transform(square, circle))  # interpolate the square into the circle
        self.play(FadeOut(square))  # fade out animation

class SquareAndCircle(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        circle.set_fill(PINK, opacity=0.5)  # set the color and transparency

        square = Square()  # create a square
        square.set_fill(BLUE, opacity=0.5)  # set the color and transparency

        square.next_to(circle, RIGHT, buff=0.5)  # set the position
        self.play(Create(circle), Create(square))  # show the shapes on screen

class AnimatedSquareToCircle(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        square = Square()  # create a square

        self.play(Create(square))  # show the square on screen
        self.play(square.animate.rotate(PI / 4))  # rotate the square
        self.play(
            ReplacementTransform(square, circle)
        )  # transform the square into a circle
        self.play(
            circle.animate.set_fill(PINK, opacity=0.5)
        )  # color the circle on screen

class DifferentRotations(Scene):
    def construct(self):
        left_square = Square(color=BLUE, fill_opacity=0.7).shift(2 * LEFT)
        right_square = Square(color=GREEN, fill_opacity=0.7).shift(2 * RIGHT)
        self.play(
            left_square.animate.rotate(PI), Rotate(right_square, angle=PI), run_time=2
        )
        self.wait()

class Video(Scene):
    def construct(self):
        words = Text("""Icpc""")
        icpc = Text("ICPC - 2022")
        box = Rectangle(
            height=4, width=6, fill_color=BLACK, fill_opacity=0.01, color=BLACK
        )
        text = Text("Monotonos")
        text.next_to(icpc, DOWN)
        ##
        primeiro_paragrafo = Text("""
        Dada uma sequência s, dizemos que um trecho si, ..., sj é monotônico
        Se todos os seus caracteres são iguais, e dizemos que ela...
        E maximal se este trecho não pode ser estendido à esquerda e nem à direita.
        sem perder a monotonicidade.
        """, )
        primeiro_paragrafo.scale(0.5)
        primeiro_paragrafo_sublinhado = Text("""
        Dada uma sequência s, dizemos que um trecho si, ..., sj é monotônico
        se todos os seus caracteres são iguais, e dizemos que ela...
        E maximal se este trecho não pode ser estendido à esquerda e nem à direita.
        sem perder a monotonicidade.
        """, t2c={'[46:124]': '#fbb003'})
        primeiro_paragrafo_sublinhado.scale(0.5)

        primeiro_paragrafo_sublinhado2 = Text("""
        Dada uma sequência s, dizemos que um trecho si, ..., sj é monotônico
        se todos os seus caracteres são iguais, e dizemos que ela...
        E maximal se este trecho não pode ser estendido à esquerda e nem à direita.
        sem perder a monotonicidade.
                                              """, t2c={'[46:124]': '#fbb003', '[140:]': '#fbb003'})
        primeiro_paragrafo_sublinhado2.scale(0.5)


        segundo_pagrafro = Text("""
        Dada uma sequência composta apenas por caracteres "a" e "b",...
        Determine quantos caracteres "a" ocorrem em trechos monótonos maximais 
        não-triviais
        """)
        segundo_pagrafro.scale(0.5)
        segundo_pagrafro.align_to(primeiro_paragrafo, LEFT)

        segundo_pagrafro_highlight1 = Text("""
        Dada uma sequência composta apenas por caracteres "a" e "b",...
        Determine quantos caracteres "a" ocorrem em trechos monótonos maximais 
        não-triviais
                                           """, t2c={'[18:27]': '#fbb003', '[59:68]': '#fbb003'})
        segundo_pagrafro_highlight1.scale(0.5)

        segundo_pagrafro_highlight2 = Text("""
        Dada uma sequência composta apenas por caracteres "a" e "b",...
        Determine quantos caracteres "a" ocorrem em trechos monótonos maximais 
        não-triviais
                                           """, t2c={'[18:27]': '#fbb003', '[59: 68]': '#fbb003', '[99:]': '#fbb003'})
        segundo_pagrafro_highlight2.scale(0.5)


        self.play(Write(icpc))
        self.wait()
        self.play(Write(text))
        self.play(FadeOut(icpc))
        self.wait()
        self.play(text.animate.shift(4*UP))
        self.wait()
        self.play(Write(primeiro_paragrafo))
        self.play(Transform(primeiro_paragrafo, primeiro_paragrafo_sublinhado))
        self.wait(1)
        self.play(Transform(primeiro_paragrafo, primeiro_paragrafo_sublinhado2))
        self.play(primeiro_paragrafo.animate.shift(2*UP))
        self.play(Write(segundo_pagrafro))
        self.play(Transform(segundo_pagrafro, segundo_pagrafro_highlight1))
        self.play(Transform(segundo_pagrafro, segundo_pagrafro_highlight2))
        self.wait(1)
        self.play(FadeOut(primeiro_paragrafo), FadeOut(segundo_pagrafro), FadeOut(text))  # fade out animation
        code = """function getMonotos(lista) {
    let result = 0
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j]) {
                result++
            } else {
                break
            }
        }
    }
    return result
}
        """
        code2 = """function getMonotos(lista) {
    let result = 0
    for (let i = 0; i < lista.length; i++) {




        console.log(i)

        
    }
    return result
}
        """

        rendered_code = Code(code=code, tab_width=4,
                     language="Javascript", font="Monospace")

        rendered_code2 = Code(code=code2, tab_width=4,
                     language="Javascript", font="Monospace")
        # Using a Transform on text with leading whitespace (and in this particular case: code) can look weird. 
        # Consider using remove_invisible_chars() to resolve this issue.
        self.play(Write(rendered_code))
        self.play(Transform(rendered_code, rendered_code2))





