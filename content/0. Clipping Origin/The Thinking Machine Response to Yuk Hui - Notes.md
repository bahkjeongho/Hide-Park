---
title: "The Thinking Machine: Response to Yuk Hui - Notes"
source: https://www.e-flux.com/notes/6783525/the-thinking-machine-response-to-yuk-hui
author:
  - "[[이택광|Alex Taek-Gwang Lee]]"
published: 2026-07-31
created: 2026-10-08
description: Alex Taek-Gwang Lee engages with Yuk Hui’s new book Kant Machine.
tags:
  - articles
  - clippings
---
```
https://www.e-flux.com/notes/6783525/the-thinking-machine-response-to-yuk-hui
```
> [!info] notes

---

![](https://images-eflux.b-cdn.net/assets/d28fa812-aa5b-4259-9db5-cee0dece33c6?&key=system-large-contain)

Illustration of Vaucanson’s Automata, from *Histoire des jouets* (1902).

Since Luther’s celebration of the printing press as an instrument of divine grace, technology has appeared not merely as a collection of useful devices but as a force that transforms the conditions under which truth, knowledge, and authority are produced. With Descartes, the machine became more than an external instrument: It became a model of the living body. Animals and bodily functions could be described as automata governed by mechanical laws, while thought was reserved for the immaterial mind. The machine thus became a limiting figure through which philosophy distinguished matter from mind, determination from freedom, and automatic operation from rational thought.

Against this background, Yuk Hui’s *Kant Machine* asks whether a machine can know, judge, act morally, and contribute to the making of peace. By transposing Kant’s fundamental questions from the human subject to the machine, Hui seeks a critical philosophy adequate to artificial intelligence. The ambition is compelling. However, its central difficulty lies in the concept of the machine on which it rests.

Hui constructs a genealogy extending from mechanical and mathematical automata to cybernetic systems, neural networks, and generative AI. Recursivity secures the continuity of this history: Mechanical execution becomes feedback, feedback becomes learning, learning becomes reflection, and reflection opens the possibility of technical autonomy. Yet these operations belong to different technical and conceptual regimes. Their resemblance does not establish their identity. The issue is not whether automata, cybernetics, and AI are historically connected, but what kind of connection this is. It is a history of translations, formalizations, and transformations, not the development of a single machinic principle.

Warren McCulloch and Walter Pitts’s 1943 essay “A Logical Calculus of the Ideas Immanent in Nervous Activity” illuminates this problem. It established a connection among neural activity, symbolic logic, automata, cybernetics, and computation while preserving the distinction between formally representing a process and causally explaining it. A recurrent network may formally reproduce memory, learning, or purposive behavior without recursion itself explaining how memory, learning, or purpose arise. Likewise, a machine may simulate reflection without adopting the principles according to which it reflects.

McCulloch and Pitts begin by radically simplifying neural activity. A neuron becomes an all-or-nothing device: It fires or does not fire, and its activity can therefore be represented by a proposition that is true or false.1 Networks of neurons can embody logical relations among propositions. Excitatory connections implement conjunction and disjunction, while inhibition implements negation. This model assumes binary activity, fixed thresholds, discrete synaptic intervals, and a stable network. Within these limits, a network without circular connections can be represented by a temporal propositional expression, and a suitable expression can be embodied in a neural network.

The result is an extraordinary correspondence between logic and physiology. Logical operations can be materially embodied in an organized network, while neural activity becomes formally intelligible as calculation. Yet this connection depends on abstraction. The model does not claim that biological neurons are literally propositions. It shows that selected features of their activity can be represented by propositional logic, preserving the formal relations needed to reproduce a behavior while excluding much of the physiological process that produces it.

This caution is crucial when McCulloch and Pitts discuss learning. The effects of changing synaptic connections can sometimes be represented by a fixed network with circular pathways. Activity can circulate rather than moving only from input to output, so the present state may depend on events from an indefinitely remote past. Circularity can therefore represent memory, recurrent activity, and purposive conduct. It does not, however, explain their physiological or subjective genesis. A network behaves as if it remembers because previous states affect present operations. It behaves purposively because its organization tends toward a determinate condition. Neither behavior requires it to represent its past as past or its goal as a reason for acting. Formal equivalence is not causal identity.

Seymour Papert places the essay at the emergence of explicit cybernetics, noting that its neural nets occupy a specific formal position between elementary Boolean operations and the general functions computable by Turing machines.2 Their historical importance lies in building a bridge among fields without erasing the differences among them. The same caution should govern any genealogy of AI. A successful translation among logic, physiology, and computation demonstrates that structures can correspond across domains. It does not prove that the translated processes share a single essence, nor that increasing formal power moves a machine toward consciousness, reflection, or freedom.

This distinction supports Hui’s claim that recursivity is the “soul” of generative AI.3 In computability theory, recursion defines a function in terms of itself. Recurrent neural activity allows a prior state to influence a subsequent one. Cybernetic feedback returns information about an output to the system that regulates it. Gradient descent iteratively adjusts parameters to minimize a loss function. Autoregressive generation predicts a token from the context generated so far. Each operation involves returning to or depending on a prior state, but the nature and purpose of that return differ.

Recursivity should therefore be treated as a formal condition that supports different operations, not as their unified explanation. It can provide a structure for memory without explaining recollection, produce goal-directed behavior without explaining how a goal acquires normative authority, and reduce error without determining why that error matters. Repeated evaluation can modify conduct without becoming reflection in the Kantian sense.

McCulloch and Pitts also complicate the simple opposition between symbolic and neural intelligence. Hui contrasts the Cartesian machine of rules and symbolic AI with the Humean machine of association, probability, and connectionism.4 Yet the early neural network was already profoundly logical. It was both a model of neural activity and a material embodiment of propositional relations. Its architecture determined which relations could be realized before any particular input arrived. This offers a more genuinely Kantian perspective: The network does not merely receive data but processes them according to conditions established by its organization.

Contemporary neural networks intensify the interaction between formal organization and empirical adjustment. Before training begins, a model already has an architecture, a tokenization system, a parameter structure, an objective function, and an optimization procedure. These conditions determine what counts as data, which relations can be computed, and how error will be measured. Training updates parameters, but only within a space of possibilities defined in advance. A transformer is thus neither purely Cartesian nor purely Humean. It combines formal architecture with statistical learning.

Training, inference, and feedback must also remain distinct. During training, optimization adjusts parameters. During inference, a deployed model typically uses those parameters without modifying them. Conversational context affects immediate computation, but a change in context is not retraining. User feedback may later enter another training process, but this institutional operation should not be attributed to the model as its own continuous self-transformation. When these levels are collapsed, AI appears more autonomous than it is, while the architectures, datasets, human labor, energy infrastructure, corporate decisions, and political objectives governing it disappear from view.

The ambiguity becomes clearer through Kant’s own automaton. In the *Critique of Practical Reason*, Kant distinguishes an *automaton materiale*, determined by material forces, from an *automaton spirituale*, determined by representations.5 A being does not cease to be an automaton merely because its conduct arises from internal mental states. If those representations are themselves determined in time, its actions remain subject to natural necessity. Kant’s wound-up turnspit makes the point: Something may appear to move by itself while merely unfolding a mechanism placed within it.6 Internal causation is not yet self-legislation. Even self-consciousness would not establish freedom if the succession of internal states were ultimately determined by an external cause.7

The automaton of computer science is not Kant’s automaton. It is a mathematical model of states, inputs, and transition rules.8 Nevertheless, both concepts address a determined succession. Automata theory shows how complex behavior can arise from formally defined transitions; Kant asks whether any increase in the complexity of determination could amount to freedom. His answer is no. Nondeterminism is not autonomy; probability is not freedom; and feedback remains heteronomous when it modifies behavior according to an externally specified goal. Learning does not establish autonomy when parameters change according to an objective the system cannot authorize.

Kant’s *automaton spirituale* therefore remains a forceful concept for analyzing AI. A language model generates outputs through immensely complex internal numerical relationships. Its responses vary with context and cannot always be predicted by its designers. Yet unpredictability and internal complexity do not establish transcendental freedom. The model remains conditioned by architecture, parameters, data, instructions, and institutions. The technical machine has changed radically since Vaucanson, but philosophically it may remain a thinking automaton.

Hui’s most important intervention concerns reflective judgment. Determinative judgment subsumes a particular under a universal already given. Reflective judgment begins with particulars and searches for a universal not available in advance.9 This distinction can be used to criticize systems that apply rules or optimize objectives without judging whether those rules and objectives are appropriate. The problem arises when reflective judgment is identified too closely with recursion. A system may compare its output with a criterion and revise its conduct, but repetition does not establish the criterion’s authority. An indefinitely recursive process does not transform an externally given standard into a self-legislated law.

The same difficulty affects the moral machine. Hui rightly argues that persuasive moral language does not confer moral agency and that alignment cannot be a neutral encoding of universally shared values. Values are contested among individuals, corporations, states, and cultures. Alignment is therefore a political organization of conduct: It concerns the procedures by which norms are negotiated, and the institutions responsible for AI are held accountable. Appeals to national or cultural values risk treating divided communities as homogeneous, while the analogy between machines and slaves too readily attributes autonomy to AI. The central issue is not the subordination of an autonomous machine but the human and institutional power to determine its objectives.

This problem is evident when the categorical imperative is treated as an algorithm. A machine might test whether a maxim is universalizable, but a system applying a programmed criterion has not given that criterion to itself. It executes a procedure whose normative authority remains external. Hui acknowledges that morality cannot become a database of prescribed rules,10 and yet recursivity does not overcome the same heteronomy when the principle guiding recursive evaluation is fixed in advance.

Hui’s reformulation of perpetual peace as a recursive process is more persuasive. Peace does not follow from imposing a completed universal order; it develops through conflict, negotiation, hospitality, law, trade, and federative relations. His “peace machine” usefully rejects the fantasy of a planetary superintelligence that calculates peace from above.11 Here, however, the algorithm functions as a philosophical diagram. No computational state space, transition function, or criterion of convergence is specified. Recursivity names the unfinished historical process through which political universality must be repeatedly reconstructed. Peace may be recursive because political order must return to and revise its principles, but this does not make history computational.

The problems I identify in Hui’s argument are therefore twofold. He overstates continuity among technical forms and moves too quickly from complexity to reflection and autonomy. McCulloch and Pitts suggest another conclusion: The machine changes, but heteronomy persists. Recursivity can extend a system’s internal complexity, yet it cannot, by itself, convert determination into freedom or computation into reason. Philosophy begins precisely here, with the passage from determination to self-determination without presupposing a fully constituted subject.

In Hegelian terms, infinite judgment reveals the failure of every finite predicate to exhaust the subject. This excess signifies both the negativity through which the subject returns to itself and the affirmative power of difference through which it departs from itself and becomes other. Freedom consists neither in the absence of determination nor in recursive self-reference, but in transforming the problematic field from which determinations arise. The decisive question is therefore not merely whether a machine can reflect on its operations, but whether it can produce difference, actualize virtual potentials, and alter the conditions of its own becoming.

Notes

1

Warren S. McCulloch and Walter H. Pitts, “A Logical Calculus of the Ideas Immanent in Nervous Activity,” in *Embodiments of Mind* (MIT Press, 1965), 21.

2

Seymour Rapert, “Introduction,” in *Embodiments of Mind* (MIT Press, 1965), xviii.

3

Yuk Hui, *Kant Machine: Critical Philosophy after AI* (Bloomsbury Academic, 2026), 34.

4

Hui, *Kant Machine*, 3, 10.

5

Immanuel Kant, *Critique of Practical Reason*, trans. and ed. Mary Gregor, trans. rev. Andrews Reath (Cambridge University Press, 2015), 79; Ak. 5:97.

6

Kant, *Critique of Practical Reason*, 79; Ak. 5:97.

7

Kant, *Critique of Practical Reason*, 82; Ak. 5:101.

8

*Handbook of Automata Theory, Vol. 1: Theoretical Foundations*, ed. Jean-Éric Pin (EMS Press, 2021), vii.

9

Hui, *Kant Machine*, 31.

10

Hui, *Kant Machine*, 59–60.

11

Hui, *Kant Machine*, 82.

###### Category

**Alex Taek-Gwang Lee** is a professor of cultural studies and a cultural critic. He teaches critical theory and philosophy at Kyung Hee University in Seoul, Korea.