const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <section>
        <div className="container">
            <div>Introducing Layers</div>
            <div>
                <span>Your creative process deserves better.</span>
                <span>{text} </span>
                <span>That&apos;s why we built Layers.</span>
            </div>
        </div>
    </section>;
}
