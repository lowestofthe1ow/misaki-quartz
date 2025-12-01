## Propositional logic

- Studies how **propositions** (a statement that is **true** or **false**) can be combined with logical operators to form more complex statements
- **Propositional calculus**: The method of manipulating formulas in propositional logic language

## Logic language

- **Syntax**: defines what makes a valid sentence or formula
- **Semantics**: maps a formula to a set of configurations that represent some meaning in the world
- **Inference rules**: given a formula $f$, what other formulas are guaranteed to follow?

## Precedence and associativity

- **Precedence**: determines the order in which different connectives are evaluated
	- Parentheses, negation, $\land$, $\lor$, $\to$, $\leftrightarrow$
- **Associativity**: determines the order in which connectives in the same precedence in a compound proposition are evaluated.
	- $\land$ and $\lor$: left-to-right
	- $\to$ and $\leftrightarrow$: right-to-left

## Derivation

- Find the **equivalence** of a proposition equation
	- **Tautology**: True for every possible assignment
	- **Contradiction**: False for every possible assignment
- Logical equivalences to remember (aka the stuff not encountered in CCDSTRU):
	- **Negative law**: $p \lor \neg p \equiv t$, $p \land \neg p \equiv c$
	- **Universal bound law**: $p \lor t \equiv t$, $p \land c \equiv c$
	- **Identity law**: $p \land t \equiv p$, $p \lor c \equiv p$

## Inference

- **Inference**: Deriving new statements from existing statements
- **Modus ponens** $$\begin{align*}& P \to Q \\ & P \\ \hline \\ & \therefore Q \end{align*}$$
- **Soundness**: Every formula added is **entailed** by the knowledge base
- **Completeness**: The inference rule can derive every formula in the form entailed by thhe knowledge base
- **CNF**: $P \to Q$ with $\neg P \lor Q$

## First-order logic

- **Predicate**: Property of an object or a relation among objects
	- **Constant**: Specific object/atom
	- **Variable**: Placeholder
- **Quantifier**: Universal and existential
- **Unification**: Finding a substitution for a variable that makes two logical expressions match

## Converting a knowledge base into CNF

1. Remove implications ($p \to q$ replaced with $\neg p \lor q$)
2. Separate conjunctions into separate clauses ($p \land q$ breaks down into $p$ and $q$ separately)
3. "Push" negations inside
4. Remove double negations
5. **Distribute $\lor$ over $\land$**
6. Remove all quantifiers:
	- **Universal**: All predicates are assumed to be existentially quantified, so just remove
	- **Existential**: Replace with Skolem constant: $\exists X \ \text{Knows}(X, \text{math}) \equiv \text{Knows}(a, \text{math})$

## Resolution refutation

- Use resolution inference to prove the truthfulness of a formula
- **Proof by contradiction**
- **Satisfiability**: A logical formula is satisfiable if there is at least one assignment of truth values to its variables that makes the whole formula true.

**Steps**:
1. Assume the **negation** of what you are trying to prove and add it to KB
2. Convert to predicate logic and CNF
3. Apply resolution inference and try to derive a contradiction.
